class End extends Phaser.Scene {
    constructor()
    {
        super('endScene');
    }

    preload()
    {
        this.load.spritesheet("endBackground", "assets/EndBackgroundNew.jpg", {frameWidth: 960, frameHeight: 720, startFrame: 0, endFrame: 7});
    }

    create()
    {
        this.endBackground = new VFX(this, 0, 0, "endBackground", 0, false, true);
        //animation config
        this.anims.create({
            key: 'endAnimate',
            frames: this.anims.generateFrameNames('endBackground', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.endBackground.anims.play('endAnimate', true);
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