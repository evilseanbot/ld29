using UnityEngine;
using System.Collections;

public class Permanent : MonoBehaviour {

	void Start () {
		GameObject.DontDestroyOnLoad (gameObject);

		if (GameObject.FindGameObjectsWithTag (gameObject.tag).Length == 2) {
			GameObject.Destroy (gameObject);
		}
	}
}
