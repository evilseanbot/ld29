function Start () {
	gameObject.GetComponent(TextMesh).text = "level " + GameObject.Find("Memory").GetComponent(Memory).getLevel();
}