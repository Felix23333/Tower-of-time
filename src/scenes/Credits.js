class Credits extends Phaser.Scene {
    constructor()
    {
        super('creditsScene');
    }

    preload()
    {
        this.load.image("creditBackground", "assets/BackgroundEmpty.jpg")
    }

    create()
    {
        this.backgroundPic = new Background(this, 0, 0, 960, 720, "creditBackground", 0, false, true);
        //temp title design
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '40px',
            color: '#FFFFFF'
        }
        let subtitleConfig = {
            fontFamily: 'Courier',
            fontSize: '30px',
            color: '#FFFFFF'
        }
        let infoConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            color: '#FFFFFF'
        }
        this.add.text(50, game.config.height - 50, "Press M to main menu!", subtitleConfig).setOrigin(0);
        
        //credit text
        this.add.text(game.config.width/2 - 50, 0, "Credits:", subtitleConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, 50, "Programmer: Felix Li, Miguel Cedillo", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, 100, "Art Design: Miguel Cedillo, Evan Kramer", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, 150, "Level Design: Miguel Cedillo", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, 200, "Mechanics Design: Felix Li, Evan Kramer", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, 250, "Sound Design: Felix Li, Miguel Cedillo", infoConfig).setOrigin(0);
        //Handle scene transition
        menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    }

    update()
    {
        if(menuKey.isDown)
        {
            this.scene.start("menuScene");
        }
    }
}