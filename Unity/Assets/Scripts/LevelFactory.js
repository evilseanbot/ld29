private var timeTillNextCreation : float = 0f;
private var timeBetweenCreations = 0.5f;
var bone: GameObject;
var cancer: GameObject;
var vein: GameObject;

private var levelLeftEdge = -5f;
private var levelRightEdge = 5f;

private var chances = new Hashtable();
chances["cancer"] = 1;
chances["bone"] = 4;
chances["vein"] = 4;
chances["nothing"] = 4;
    
function FixedUpdate () {
    if (Time.time > timeTillNextCreation) {
        create();
        timeTillNextCreation = Time.time + timeBetweenCreations;
    }
}

function create() {
    var newPosition = Vector3(Random.Range(levelLeftEdge, levelRightEdge), -10, 0);
    var newRotation = Quaternion.Euler(0, 0, 0);
    
    var veinPosition = Vector3(0, -10, 0);
    
    var objectToCreate = drawObjectFromHat();
    
    if (objectToCreate == "bone") {
        var newBone = GameObject.Instantiate(bone, newPosition, newRotation);
    } else if (objectToCreate == "cancer") {
        var newCancer = GameObject.Instantiate(cancer, newPosition, newRotation);
    } else if (objectToCreate == "vein") {
        var newVeinr = GameObject.Instantiate(vein, veinPosition, newRotation);
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
    
    for (x = 0; x < 4; x++) {
        names.push("vein");
    }    
    

   for (x = 0; x < 8; x++) {
        names.push("nothing");
    }    
    

    var randomSelect = Random.Range(0, names.length);
    
    return names[randomSelect];
}