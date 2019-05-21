import hikesController from './hikesController.js';

window.addEventListener('load', () => {
   const controller = new hikesController();
   controller.renderHikeList();
});