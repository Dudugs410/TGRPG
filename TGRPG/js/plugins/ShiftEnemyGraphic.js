(function() {
  Game_System.prototype.shiftEnemyGraphic = function(enemyId, shiftAmount) {
    var enemy = $dataEnemies[enemyId];
    if (!enemy) return;

    var bitmap = ImageManager.loadEnemy(enemy.battlerName, 0);
    if (!bitmap.isReady()) {
      setTimeout(this.shiftEnemyGraphic.bind(this, enemyId, shiftAmount), 5);
      return;
    }

    var newBitmap = new Bitmap(bitmap.width, bitmap.height);
    newBitmap.blt(bitmap, shiftAmount, 0, bitmap.width, bitmap.height, 0, 0);

    ImageManager.cacheEnemy(enemy.battlerName, 0, newBitmap);
  };
})();