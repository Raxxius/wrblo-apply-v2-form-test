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
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(props.formList[i]);
  }

  return [formIntro, numberOfPages, pages];
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
      if (prevPageNumber != 1) {
        newPageNumber--;
      }
    }
    if (e === "next") {
      if (prevPageNumber != numberOfPages) {
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
  /* need to generate function that automates taking the page out */
  const page1 = pages[0];
  const page2 = pages[1];
  const page3 = pages[2];
  const formData = [...page1, ...page2, ...page3];

  alert(
    "Please remember to attach any additional documents to the email before sending"
  );
  const emailBody = formData.map((form) => {
    if (form.listType !== "fieldset") {
      return `%0A%0A ${form.formtitle}: %0A%0A ${form.formText}`;
    } else {
      const subForm = form["list"].map((subform) => {
        return `%0A%0A ${subform.formtitle}: %0A%0A ${subform.formText}`;
      });
      return `%0A%0A ${form.legend} ${subForm}`;
    }
  });

  const mailto = `mailto:mail@gmail.com?subject=WRBLO Preliminary submit form&body=${emailBody}`;
  window.location.href = mailto;
}

/* Handle Form updates
 *
 * Reponse to keypress event inputing data to form
 *
 **/

export function handleFormChange(event, setFormData) {

    console.log("handle form change")
  // setFormData((prevFormData) => {
  //   let newFormData = []
  //   for (let i = 0; i < prevFormData.length; i++) {
  //     newFormData[i] = prevFormData[i].map((form) => {
  //       if (form.id === event.target.id) {
  //         return { ...form, formText: event.target.value };
  //       } else if (form.listType === "fieldset") {
  //         const subFormData = form["list"].map((subform) => {
  //           if (subform.id === event.target.id)
  //             return { ...subform, formText: event.target.value };
  //           return subform;
  //         });
  //         return { ...form, list: subFormData };
  //       }
  //       return form;
  //     });
  //   }
  //   return newFormData
  // });
}

  /** Current alert, to be fleshed out to a modal */

  export function handleHelpButton(helpButton) {
    alert(helpButton)
  }

/* Handle Save
 * To be updated
 */
// export function handleSave(form) {
//   alert("saving application form");
//   const submitData = JSON.stringify(form);
//   const blob = new Blob([submitData], { type: "text/plain" });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.download = "form-data.txt";
//   link.href = url;
//   link.click();
// }

/* Handle loading data from a text file
 * To be updated
 */
// export function handleLoad(e) {
//   let file = e.target.files[0];
//   let reader = new FileReader();
//   reader.readAsText(file);
//   console.log(e.target.files[0]);
//   reader.onload = function () {
//     let newForm = JSON.parse(reader.result);
//     console.log(newForm);
//     setFormData(newForm);
//   };
// }
