/**
 * Created by pawel on 06.10.2014.
 */
var Collision =
{
    CheckRects: function(rectA, rectB)
    {
        if (rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x &&
            rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y)
        {
            return true;
        }

        return false;
    }
};