class End extends Phaser.Scene {
    constructor()
    {
        super('endScene');
    }

    preload()
    {

    }

    create()
    {
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
        this.add.text(game.config.width/2 - 200, game.config.height/2 - 200, "Congratulations!", titleConfig);
        this.add.text(game.config.width/2 - 200, game.config.height - 100, "Press M to main menu!", subtitleConfig).setOrigin(0);
        
        //credit text
        this.add.text(game.config.width/2 - 50, game.config.height / 2 - 100, "Credits:", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, game.config.height / 2 - 50, "Programmer: Felix Li, Miguel Cedillo", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, game.config.height / 2, "Art Design: Miguel Cedillo, Evan Kramer", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, game.config.height / 2 + 50, "Level Design: Miguel Cedillo", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, game.config.height / 2 + 100, "Mechanics Design: Felix Li, Evan Kramer", infoConfig).setOrigin(0);
        this.add.text(game.config.width/2 - 200, game.config.height / 2 + 150, "Sound Design: Felix Li, Miguel Cedillo", infoConfig).setOrigin(0);
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