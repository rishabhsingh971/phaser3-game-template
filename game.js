var Sample = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function Sample() {
        Phaser.Scene.call(this, { key: 'sample' });
        this.score;
        this.scoreText;
    },

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude',
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    },

    create() {
        // add sky
        this.add.image(400, 300, 'sky');

        this.platforms = this.createPlatforms();

        this.player = this.createPlayer();

        this.stars = this.createStars();

        this.cursors = this.input.keyboard.createCursorKeys();

        this.bombs = this.createBombGroup();

        this.score = 0;
        this.scoreText = this.createScoreText();

        this.initAnimations();

        this.initPhysics();
    },

    createPlatforms() {
        var platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
        return platforms;
    },

    createPlayer() {
        var player = this.physics.add.sprite(100, 450, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        return player;
    },

    createBombGroup() {
        return this.physics.add.group();
    },

    createStars() {
        var stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        return stars;
    },

    createScoreText() {
        return this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    },

    initAnimations() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20,
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        });
    },

    initPhysics() {
        // player - platform
        this.physics.add.collider(this.player, this.platforms);

        // stars - platform
        this.physics.add.collider(this.stars, this.platforms);

        // stars - player
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        // bomb - platform
        this.physics.add.collider(this.bombs, this.platforms);

        // bomb - player
        this.physics.add.overlap(this.player, this.bombs, this.hitBomb, null, this);
    },

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    },

    collectStar(player, star) {
        star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = this.bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

        }
    },

    hitBomb: function (player, bomb) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        gameOver = true;
    }
});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Sample],
};
var game = new Phaser.Game(config);