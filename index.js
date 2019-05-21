import hikesController from './hikesController.js';

let controller = new hikesController();
window.addEventListener('load', controller.renderHikeList);