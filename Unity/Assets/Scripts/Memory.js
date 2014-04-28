var level = 1f;

function Start() {
    gameObject.DontDestroyOnLoad(gameObject);
}

function increaseLevel() {
    level++;
    Time.timeScale = 1f + (level * 0.2f);
}

function getLevel() {
    return level;
}

function resetLevel() {
    level = 1;
}