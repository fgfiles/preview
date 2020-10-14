export class Importer {
	constructor(options = {}) {
        this.options = options;
    }
    
    static async load(){

    }

    static async loadFromURL(src, instance, importCache){
        if(!src) return false;

        instance.src = src;
        instance.srcPath = src.substr(0, src.lastIndexOf("/"));
        if(instance.resPath === undefined) instance.resPath = instance.srcPath;
        instance.srcFilename = src.split("/").pop();

        if(importCache && importCache[src] && importCache[src].input){
            return instance.input = importCache[src].input;
        }else{
            return this.fetchFromURL(src).then((response) => {
                instance.input = response;
    
                if(importCache){
                    importCache[src] = {
                        input: response
                    };
                }
    
                // return this.load();
            });
        }
    }

    // Fetch
    static async fetchFromURL(url){
        return fetch(url, {
            "Content-Type": "text/html"
        }).then((response) => {
            // Read response
            if (!response.ok) {
                throw Error(response.statusText, response.url);
            }
            return response.text();
        }).then(
            // Return contents
            (contents) => contents
        ).catch((e) => {
            console.error(`Error fetching template '${url}'.`, e);
        });
    }
}