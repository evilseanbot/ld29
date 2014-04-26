function OnTriggerStay2D(other) {
    var cancerCounter = GameObject.Find("CancerCounter").GetComponent(CancerCounter); 
    cancerCounter.increase();
    GameObject.Destroy(gameObject);
}