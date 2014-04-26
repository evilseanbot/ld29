function OnTriggerStay2D(other) {
    if (GameObject.Find("CancerCounter").GetComponent(CancerCounter).gameWon()) {
        Application.LoadLevel("main");
    }
}