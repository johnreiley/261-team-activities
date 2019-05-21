import hikesView from './hikesView.js';
import hikesModel from './hikesModel.js';

export default class hikesController {
   constructor() {
      this.model = new hikesModel();
      this.view = new hikesView();
   }

   renderHikeList() {
      const hikeListElement = document.getElementById('hikes');
      hikeListElement.innerHTML = '';
      this.model.getHikes().forEach(hike => {
         hikeListElement.appendChild(this.view.renderOneHike(hike));
      });
   }
};