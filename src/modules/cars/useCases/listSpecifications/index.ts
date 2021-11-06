import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

// const specificationsRepository = SpecificationsRepository.getInstance();
const specificationsRepository = null;
const listSpecificatinsUseCase = new ListSpecificationsUseCase(specificationsRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificatinsUseCase);

export { listSpecificationsController, listSpecificatinsUseCase  };