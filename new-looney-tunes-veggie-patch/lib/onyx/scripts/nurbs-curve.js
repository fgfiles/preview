import { vec3, vec4 } from "../lib/gl-matrix-master/src/gl-matrix.js";
import { Component } from "./main.js";

let _id = 0;

// Note: This class was adapted from THREE.JS, all kudos goes to the brilliant minds of those authors.

export class NURBSCurve extends Component {
	constructor({id = "NURBSCurve_" + (_id++), arcLengthDivisions = 5, controlPoints = [], degree = 3, knots = [], startKnot = 0, endKnot = knots.length - 1} = {}){
        super(...arguments);
        
        this.arcLengthDivisions = arcLengthDivisions;
        this.controlPoints = controlPoints;
        this.degree = degree;
        this.knots = knots;
        this.startKnot = startKnot;
        this.endKnot = endKnot;

        this.valid = true;
    }

    calcBasisFunctions( span, parametricPoint, degree, knotVector ) {
		var N = [];
		var left = [];
        var right = [];
        
		N[ 0 ] = 1.0;

		for ( var j = 1; j <= degree; ++ j ) {
			left[ j ] = parametricPoint - knotVector[ span + 1 - j ];
			right[ j ] = knotVector[ span + j ] - parametricPoint;

			var saved = 0.0;

			for ( var r = 0; r < j; ++ r ) {
				var rv = right[ r + 1 ];
				var lv = left[ j - r ];
				var temp = N[ r ] / ( rv + lv );
				N[ r ] = saved + rv * temp;
				saved = lv * temp;
			 }

			 N[ j ] = saved;
		 }

		 return N;
    }

    calcBSplinePoint( degree, knotVector, controlPoints, parametricPoint ) {
		var span = this.findSpan( degree, parametricPoint, knotVector );
		var N = this.calcBasisFunctions( span, parametricPoint, degree, knotVector );
		var C = [0,0,0,0];

		for ( var j = 0; j <= degree; ++ j ) {
			var point = controlPoints[ span - degree + j ];
			var Nj = N[ j ];
            var wNj = point[3] * Nj;
            
			C[0] += point[0] * wNj;
			C[1] += point[1] * wNj;
			C[2] += point[2] * wNj;
			C[3] += point[3] * Nj;
		}

		return C;
	}
    
    findSpan( degree, parametricValue, knotVector ) {
		var n = knotVector.length - degree - 1;

		if ( parametricValue >= knotVector[ n ] ) {
			return knotVector.indexOf(knotVector[n]) - 1; //n - 1;
		}

		if ( parametricValue <= knotVector[ degree ] ) {
			return degree;
		}

		var low = degree;
		var high = n;
		var mid = Math.floor( ( low + high ) / 2 );

		while ( parametricValue < knotVector[ mid ] || parametricValue >= knotVector[ mid + 1 ] ) {
			if ( parametricValue < knotVector[ mid ] ) {
				high = mid;
			} else {
				low = mid;
			}

			mid = Math.floor( ( low + high ) / 2 );
		}

		return mid;
    }
    
    getLengths ( divisions = this.arcLengthDivisions) {

		if ( this.cacheArcLengths &&
			( this.cacheArcLengths.length === divisions + 1 ) &&
			  this.valid ) {

			return this.cacheArcLengths;

		}

		this.needsUpdate = false;

		var cache = [];
		var current, last = this.getPoint( 0 );
		var p, sum = 0;

		cache.push( 0 );

		for ( p = 1; p <= divisions; p ++ ) {

			current = this.getPoint( p / divisions );
			sum += vec3.distance(current, last);
			cache.push( sum );
			last = current;

		}

		this.cacheArcLengths = cache;

		return cache; // { sums: cache, sum: sum }; Sum is in the last element.

	}
    
    getPoint(t){
        var u = this.knots[ this.startKnot ] + t * ( this.knots[ this.endKnot ] - this.knots[ this.startKnot ] ); // linear mapping t->u

        // following results in (wx, wy, wz, w) homogeneous point
        var hpoint = this.calcBSplinePoint( this.degree, this.knots, this.controlPoints, u );
    
        if ( hpoint[3] != 1.0 ) {
            // project to 3D space: (wx, wy, wz, w) -> (x, y, z, 1)
            vec4.scale(hpoint, hpoint, 1 / hpoint[3] );
        }
    
        return [hpoint[0], hpoint[1], hpoint[2], hpoint[3]];
    }

    getPointAt(u){
        var t = this.getUtoTmapping( u );
		return this.getPoint( t );
    }

    getUtoTmapping( u, distance ) {

		var arcLengths = this.getLengths();

		var i = 0, il = arcLengths.length;

		var targetArcLength; // The targeted u distance value to get

		if ( distance ) {

			targetArcLength = distance;

		} else {

			targetArcLength = u * arcLengths[ il - 1 ];

		}

		// binary search for the index with largest value smaller than target u distance

		var low = 0, high = il - 1, comparison;

		while ( low <= high ) {

			i = Math.floor( low + ( high - low ) / 2 ); // less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats

			comparison = arcLengths[ i ] - targetArcLength;

			if ( comparison < 0 ) {

				low = i + 1;

			} else if ( comparison > 0 ) {

				high = i - 1;

			} else {

				high = i;
				break;

				// DONE

			}

		}

		i = high;

		if ( arcLengths[ i ] === targetArcLength ) {

			return i / ( il - 1 );

		}

		// we could get finer grain at lengths, or use simple interpolation between two points

		var lengthBefore = arcLengths[ i ];
		var lengthAfter = arcLengths[ i + 1 ];

		var segmentLength = lengthAfter - lengthBefore;

		// determine where we are between the 'before' and 'after' points

		var segmentFraction = ( targetArcLength - lengthBefore ) / segmentLength;

		// add that fractional amount to t

		var t = ( i + segmentFraction ) / ( il - 1 );

		return t;

	}
}