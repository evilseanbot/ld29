var patient1 : GameObject;
var patient2 : GameObject;
var patient3 : GameObject;

function Start() {
    var level = GameObject.Find("Memory").GetComponent(Memory).getLevel();
    
    
    
    var patientToLoad;
    var patientPosition;

    if (level % 3 == 1) {
         patientToLoad = patient1;
         patientPosition = Vector3(-400, -100, 2);
    } else if (level % 3 == 2) {
         patientToLoad = patient2;
         patientPosition = Vector3(-150, 200, 2);        
    } else if (level % 3 == 0) {
         patientToLoad = patient3;
         patientPosition = Vector3(-300, -50, 2);            
    }
    
    GameObject.Instantiate(patientToLoad, patientPosition, Quaternion.Euler(0, 0, 0));
}