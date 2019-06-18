window.addEventListener('load', () => {
   const prevButton = document.getElementById('prevButton');
   const nextButton = document.getElementById('nextButton');
   const tableContent = document.getElementById('tableContent');
   const peopleUrl = 'https://swapi.co/api/people/';
   const controller = new Controller(peopleUrl);
   controller.handler(controller.url);

   prevButton.addEventListener('click', () => {
      if (controller.prevPage != null) {
         controller.handler(controller.prevPage);
      }
   })
   nextButton.addEventListener('click', () => {
      console.log(controller)
      if (controller.nextPage != null) {
         controller.handler(controller.nextPage);
      }
   })
})


class Controller {
   constructor(url) {
      this.prevPage = null;
      this.nextPage = null;
      this.url = url;
   }

   handler(url) {
      let people = this.getPeople(url);
      people.then((peopleList) => {
         this.prevPage = peopleList.previous;
         this.nextPage = peopleList.next;

         this.buildTable(peopleList);
         console.log(peopleList);
      })
   }

   getPeople(url) {
      return fetch(url)
         .then((response) => {
            if (!response.ok) {
               throw new Error("The server doesn't like you");
            }
            return response.json();
         })
         .catch(e => console.log(e.message))
   }

   buildTable(people) {
      let rowList = [];
      people.results.forEach(
         person => rowList.push(this.buildRow(person))
      )
      var tableData = rowList.join("");
      tableContent.innerHTML = tableData;
   }

   buildRow(person) {
      const newRow = `<tr>
         <td>${person.name}</td>
         <td>${person.height}</td>
         <td>${person.hair_color}</td>
      </tr>   
      `
      return newRow;
   }
}

