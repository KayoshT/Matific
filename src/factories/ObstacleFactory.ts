import { EntityFactory } from './EntityFactory';

export class ObstacleFactory extends EntityFactory {
    createEntity(width: number): any { // Adjust as needed
        return {
            x: Math.random() * width,
            y: 0,
            width: 30,
            height: 30,
            moveDown() {
                this.y += 2; // Adjust speed as needed
            }
        };
    }
}
