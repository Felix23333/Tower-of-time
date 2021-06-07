class End extends Phaser.Scene {
    constructor()
    {
        super('endScene');
    }

    preload()
    {
        this.load.image("endBackground", "assets/EndBackground.jpg");
    }

    create()
    {
        this.endBackground = new Background(this, 0, 0, 960, 720, "endBackground", 0, false, true);

        //Handle scene transition
        menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        creditsKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    }

    update()
    {
        if(menuKey.isDown)
        {
            this.scene.start("menuScene");
        }
        if(creditsKey.isDown)
        {
            this.scene.start("creditsScene");
        }
    }
}