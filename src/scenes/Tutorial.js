class Tutorial extends Phaser.Scene {
    constructor()
    {
        super('tutorialLevelNew');
    }

    preload()
    {
        this.load.image("player", "assets/testplayer.png");
        this.load.image("plain", "assets/testplain.png");
        this.load.image("ladder", "assets/testladder.png");
    }

    create()
    {
        console.log("Present!");

        //add plain
        this.plain1 = this.add.tileSprite(0, 530, game.config.width, 50, "plain").setOrigin(0);
        this.physics.add.existing(this.plain1);
        this.plain1.body.setAllowGravity(false);
        this.plain1.body.immovable = true;

        this.plain2 = this.add.tileSprite(32, 330, game.config.width, 50, "plain").setOrigin(0);
        this.physics.add.existing(this.plain2);
        this.plain2.body.setAllowGravity(false);
        this.plain2.body.immovable = true;

        this.plain3 = this.add.tileSprite(0, 130, game.config.width - 32, 50, "plain").setOrigin(0);
        this.physics.add.existing(this.plain3);
        this.plain3.body.setAllowGravity(false);
        this.plain3.body.immovable = true;

        //add ladder
        this.ladder1 = this.add.tileSprite(0, 330, 32, 200, "ladder").setOrigin(0);
        this.physics.add.existing(this.ladder1);
        this.ladder1.body.setAllowGravity(false);
        this.ladder1.body.immovable = true;

        this.ladder2 = this.add.tileSprite(game.config.width - 32, 130, 32, 200, "ladder").setOrigin(0);
        this.physics.add.existing(this.ladder2);
        this.ladder2.body.setAllowGravity(false);
        this.ladder2.body.immovable = true;

        //add gravity
        this.physics.world.gravity.y = 1000;
        //add player
        this.player = new Player(this, playerX, playerY, "player");

        //Handle Input
        switchTimeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        climbKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        //add collider
        this.physics.add.collider(this.player, [this.plain1, this.plain2, this.plain3]);
    }

    update()
    {
        this.player.update();
        //change Time
        if(Phaser.Input.Keyboard.JustDown(switchTimeKey))
        {
            this.changeTime();
        }
        if(this.physics.overlap(this.player, [this.ladder1, this.ladder2]) && climbKey.isDown)
        {
            console.log("overlap");
            this.player.climb();
            this.player.body.setAllowGravity(false);
        }
        else
        {
            this.player.body.setAllowGravity(true);
        }
    }

    changeTime()
    {
        playerX = this.player.x;
        playerY = this.player.y;
        this.scene.start("tutorialLevelOld");
    }
}