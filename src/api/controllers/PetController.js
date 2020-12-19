import { Router } from 'express';
import { PetService } from '../services/PetService';
const PetController = Router();

PetController.get('/', function (_req, res) {
    const pets = PetService.findMany();
    res.status(200).json(pets);
});

export default PetController;
