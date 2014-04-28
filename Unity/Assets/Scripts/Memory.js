var level = 1f;
var fadeToBlack : GameObject;
var changingLevel = false;

function Start() {
    gameObject.DontDestroyOnLoad(gameObject);
}

function increaseLevel() {
    level++;
    Time.timeScale = (Mathf.Pow(1.15f, level-1f));
    Application.LoadLevel("main");
    changingLevel = false;
}

function getLevel() {
    return level;
}

function resetLevel() {
    level = 1;
    Time.timeScale = 1f;
    Application.LoadLevel("main");   
    changingLevel = false; 
}

function die() {
    if (!changingLevel) {
	    Invoke("addBlack", 2f);
	    Invoke("resetLevel", 4f);
	    changingLevel = true;
	}
}

function nextLevel() {
    if (!changingLevel) {
	    Invoke("addBlack", 2f);
	    Invoke("increaseLevel", 4f);
	 }
}

function addBlack() {
    GameObject.Instantiate(fadeToBlack, Vector3(0, 0, -7), Quaternion.Euler(0, 0, 0));
}