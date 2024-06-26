import { EntityFactory } from './EntityFactory';
import { Parachutist } from '../models/Parachutist';

export class ParachutistFactory extends EntityFactory {
    createEntity(width: number): Parachutist {
        return new Parachutist(Math.random() * width, 0);
    }
}
