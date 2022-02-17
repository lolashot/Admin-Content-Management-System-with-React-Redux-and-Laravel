import EventsDataService from "../Services/EventsService";

const countEvents = () => {
   EventsDataService.getAll()
        .then(response => {
            console.log("count in utils", response.data.length);
            return response.data.length
        })
        .catch(e => {
            console.log(e);
        });
};


export default {
    countEvents,
  };