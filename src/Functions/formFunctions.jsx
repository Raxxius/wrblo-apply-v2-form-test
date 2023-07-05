/** function that parses the JSON file into seperate variables that can be used by the form consturctor
 *
 * input = object {keys = intro: text, numberOfPages: number, formList: formobject}
 *
 *
 * output = formIntro (text) numberOfPages (number), pages(array of objects)
 */

export function parseData(props) {
  const numberOfPages = props.numberOfPages;
  const pages = [];
  const formIntro = props.intro;
  const introModalText = props.introModalText;
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(props.formList[i]);
  }

  return [formIntro, introModalText, numberOfPages, pages];
}

/** Page slider function
 *
 * input: e = prev/next, setPageNumber state function and number of pages.
 *
 * output: none - pageNumber state is changed via setState(setPageNumber)
 */

export function handlePageChange(e, setPageNumber, numberOfPages) {
  setPageNumber((prevPageNumber) => {
    let newPageNumber = prevPageNumber;
    if (e === "prev") {
      if (prevPageNumber !== 1) {
        newPageNumber--;
      }
    }
    if (e === "next") {
      if (prevPageNumber !== numberOfPages) {
        newPageNumber++;
      }
    }
    return newPageNumber;
  });
}

/* Handle emailing data
 *
 * input = pages(formData)
 *
 * Output = email with text input of form
 */

export function handleSubmit(pages) {
  /*
   * sub function that parses the pages into an array
   */
  const parseFormData = (pages) => {
    let returnValue = [];
    pages.map((page) => (
      returnValue.push(...page)
    ));
    return returnValue;
  };

  const formData = parseFormData(pages);

  alert(
    "Please remember to attach any additional documents to the email before sending"
  );
  const emailBody = formData.map((form) => {
    if (form.listType !== "fieldset") {
      return `%0A%0A ${form.formlegend}: %0A%0A ${form.formtext}`;
    } else {
      const subForm = form["list"].map((subform) => {
        return `%0A%0A ${subform.formlegend}: %0A%0A ${subform.formtext}`;
      });
      return `%0A%0A ${form.legend} ${subForm}`;
    }
  });

  const mailto = `mailto:mail@gmail.com?subject=WRBLO Preliminary submit form&body=${emailBody}`;
  window.location.href = mailto;
}

/* Handle Form updates
 *
 * Reponse to keystroke 'event' when user is inputing data to form
 *
 * input = keystroke event, setFormData state function and pageNumber
 *
 * output = statechange(formData) event
 *
 **/

export function handleFormChange(event, setFormData, pageNumber) {
  setFormData((prevFormData) => {
    /** selects the page being changed */
    let newFormDataValue = prevFormData.formList[pageNumber - 1];
    let newFormData = [];
    /** maps through the form for the event id and changes the value if it's changed */
    newFormData = newFormDataValue.map((form) => {
      if (form.id === event.target.id) {
        return { ...form, formtext: event.target.value };
      } else if (form.listType === "fieldset") {
        /** if fieldset is used, then sublists the fieldset form */
        const subFormData = form["list"].map((subform) => {
          if (subform.id === event.target.id) {
            return { ...subform, formtext: event.target.value };
          }
          return subform;
        });
        return { ...form, list: subFormData };
      }
      return form;
    });
    let returnValue = { ...prevFormData };
    returnValue.formList[pageNumber - 1] = newFormData;
    return returnValue;
  });
}

/** Current alert, to be fleshed out to a modal */

export function handleHelpButton(helpButton, setModalActive, setModalText) {
  console.log("modal activated");
  setModalActive(true);
  setModalText(helpButton);
}

/* Handle Save
 * To be updated
 */
export function handleSave(form) {
  alert("saving application form");
  const submitData = JSON.stringify(form);
  const blob = new Blob([submitData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "form-data.txt";
  link.href = url;
  link.click();
}

/* Handle loading data from a text file
 * To be updated
 */
export function handleLoad(e, setFormData) {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    let newForm = JSON.parse(reader.result);
    setFormData(newForm);
  };
}
