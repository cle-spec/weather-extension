//% color=#FFDE0A icon="☼"


namespace weather {
    export enum WeatherType {
        //% block="rain"
        Rain,
        //% block="heavy rain"
        HeavyRain,
        //% block="snow"
        Snow,
        //% block="wind"
        Wind
    }

    /**
     * Set the current weather effect
     */
    //% block="set weather to %type"
    //% weight=100
    export function setWeather(type: WeatherType): void {
        switch (type) {
            case WeatherType.Rain:
                createRain();
                break;
            case WeatherType.HeavyRain:
                createHeavyRain();
                break;
            case WeatherType.Snow:
                createSnow();
                break;
            case WeatherType.Wind:
                createWind();
                break;
        }
    }

    function createRain() {
        game.onUpdateInterval(50, function() {
        let raindrop = sprites.create(img`
            . . 9
            . . 9
            . . 9
        `, SpriteKind.Food)
        raindrop.setVelocity(0, 50)
        raindrop.setPosition(Math.randomRange(0, screen.width), 0)
        raindrop.lifespan = 3000
        raindrop.setFlag(SpriteFlag.RelativeToCamera, true)
    })
    }
    

    function createHeavyRain() {
        game.onUpdateInterval(50, function () {
            for (let i = 0; i < 3; i++) {
                let raindrop2 = sprites.create(img`
                    . 8 .
                    . 8 .
                    . 8 .
                `, SpriteKind.Food)
                raindrop2.setVelocity(0, 100)
                raindrop2.setPosition(Math.randomRange(0, screen.width), 0)
                raindrop2.lifespan = 2000
                let raindrop = sprites.create(img`
                    . . 9
                    . . 9
                    . . 9
                `, SpriteKind.Food)
                raindrop.setVelocity(0, 50)
                raindrop.setPosition(Math.randomRange(0, screen.width), 0)
                raindrop.lifespan = 3000
                raindrop2.setFlag(SpriteFlag.RelativeToCamera, true)
                raindrop.setFlag(SpriteFlag.RelativeToCamera, true)
                raindrop.z = 5
            }
        })
    }

    function createSnow() {
        game.onUpdateInterval(200, function () {
            let snowflake = sprites.create(img`
                1
            `, SpriteKind.Player)
            snowflake.setVelocity(0, 20)
            snowflake.setPosition(Math.randomRange(0, screen.width), 0)
            snowflake.lifespan = 10000

            snowflake.setFlag(SpriteFlag.RelativeToCamera, true)
        })
    }

    function createWind() {
        game.onUpdateInterval(400, function () {
            for (let j = 0; j < 2; j++) {
                let gust = sprites.create(img`
                    . 1 1 1 1
                    . 1 . . 1
                    . 1 1 . 1
                    . . . . 1
                    1 1 1 1 1
                `, SpriteKind.Food)
                gust.setVelocity(50, 0)
                gust.setPosition(0, Math.randomRange(0, screen.height))
                gust.lifespan = 5000
                gust.setFlag(SpriteFlag.RelativeToCamera, true)
            }
        })
    }
    forever(function() {
        for (let value of sprites.allOfKind(SpriteKind.Food)) {
            if (value.y >= 130 || value.x >= 170) {
            sprites.destroy(value)
        }
    }
    
    
})
}
