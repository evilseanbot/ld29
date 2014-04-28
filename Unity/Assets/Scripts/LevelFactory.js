private var timeTillNextCreation : float = 0f;
private var timeBetweenCreations = 1f;

var bone: GameObject;
var cancer: GameObject;
var lVein: GameObject;
var rVein: GameObject;

private var levelLeftEdge = -3f;
private var levelRightEdge = 3f;

private var chances = new Hashtable();
chances["cancer"] = 1;
chances["bone"] = 4;
chances["lVein"] = 2;
chances["rVein"] = 2;
chances["nothing"] = 4;
    
private var generationY = 15f;    
    
function FixedUpdate () {
    if (Time.time > timeTillNextCreation) {
        create();
        timeTillNextCreation = Time.time + timeBetweenCreations;
    }
}

function create() {
    var newPosition = Vector3(Random.Range(levelLeftEdge, levelRightEdge), -generationY, 0);
    var newRotation = Quaternion.Euler(0, 0, 0);
    
    var veinPosition = Vector3(0, -generationY, 0.5);
    
    var objectToCreate = drawObjectFromHat();
    
    if (objectToCreate == "bone") {
        var newBone = GameObject.Instantiate(bone, newPosition, newRotation);
    } else if (objectToCreate == "cancer") {
        var newCancer = GameObject.Instantiate(cancer, newPosition, newRotation);
    } else if (objectToCreate == "lVein") {
        var newLVein = GameObject.Instantiate(lVein, veinPosition, newRotation);
    } else if (objectToCreate == "rVein") {
        var newRVein = GameObject.Instantiate(rVein, veinPosition, newRotation);
    }
}

function drawObjectFromHat () {
    var names = new Array();
    var x : int;
    
    for (x = 0; x < 1; x++) {
        names.push("cancer");
    }    

    for (x = 0; x < 4; x++) {
        names.push("bone");
    }    
    
    for (x = 0; x < 2; x++) {
        names.push("lVein");
    }    

    for (x = 0; x < 2; x++) {
        names.push("rVein");
    }            

   for (x = 0; x < 4; x++) {
        names.push("nothing");
    }    
    

    var randomSelect = Random.Range(0, names.length);
    
    return names[randomSelect];
}