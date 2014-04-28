private var string = "NANOMINEBO";
private var timeToWrite = 0f;
private var timeBetweenLetters = 0.5f;
private var currentLength = 0;

function Start () {
    timeToWrite = Time.time + timeBetweenLetters;
}

function Update () {
    if (currentLength != string.Length) {

	    if (Time.time > timeToWrite) {
	        currentLength += 1;
	        timeToWrite = Time.time + timeBetweenLetters;
	    }
	    
		gameObject.GetComponent(TextMesh).text = string.Substring(0, currentLength);
		if (Time.time % 0.3f > 0.15f) {
		    gameObject.GetComponent(TextMesh).text += "_";
		}
	} else {
        GameObject.Find("PressKeyText").GetComponent(TextMesh).text = "Press Any Key";	
	}
}