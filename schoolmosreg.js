let schedule = [
  "8:15 - 8:55",
  "9:05 - 9:45",
  "9:55 - 10:35",
  "10:50 - 11:30",
  "11:45 - 12:25",
  "12:40 - 13:20",
  "13:40 - 14:20"
];

let gdzBySubjects = {
  "Англ. язык": "https://gdz.ru/class-9/english/reshebnik-spotlight-9-vaulina-yu-e/",
  "Геометрия": "https://gdz.ru/class-7/geometria/atanasyan-7-9/",
  "Алгебра": "https://gdz.ru/class-9/algebra/mordkovich-10",
  "Физика": "https://www.euroki.org/gdz/ru/fizika/9_klass/a_v_peryshkin_e_m_gutnik",
  "Химия": "https://gomolog.ru/reshebniki/9-klass/kuznecova-2019.html",
  "Информатика": "https://5urokov.ru/gdz/bosova_9_uch",
  "ОБЖ": "https://gdzznaniya.ru/obzh-9/smirnov/",
  "Ист.России.Всеоб.ист": "https://megaresheba.ru/gdz/istorija/9-klass/arsentjev",
  "География": "https://www.euroki.org/gdz/ru/geografiya/9_klass/konturnye-karty-po-geografii-9-klass-fgos-673",
  "Рус. язык": "https://gdz.ru/class-9/russkii_yazik/barhudarov-kruchkov-9/",
  "Родной язык": "https://gdz.ru/class-9/russkii_yazik/barhudarov-kruchkov-9/"
}

function start() {
  function replaceLessonNumberTitleHTML(underLessonTitleElement) {
    lessonNumberTitle = underLessonTitleElement.innerText;
    underLessonTitleElement.innerHTML = " <span style=\"color: white; background-color: #49b1dc; padding: 1px 6px\">" + lessonNumberTitle + "</span>";
  }

  function insertSchedule(underLessonTitleElement, lessonNumber) {
    underLessonTitleElement.innerHTML += "<span style=\"color: white; background-color: #32a1ce; padding: 1px 6px\">" + schedule[lessonNumber] + "</span>";
  }

  function insertGdzButton(underLessonTitleElement) {
    let subject = underLessonTitleElement.parentElement.getElementsByClassName("strong")[0].title;
    let gdzURL = gdzBySubjects[subject];
    underLessonTitleElement.innerHTML += "<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"" + gdzURL + "\" style=\"color: white; background-color: #49b1dc; padding: 1px 6px;\">ГДЗ</a>";
  }

  let days = document.getElementsByClassName("grid vam marks");
  for (let day of days) {
    let underLessonTitleElements = day.getElementsByClassName("light");
    for(let i = 0; i < underLessonTitleElements.length; i++) {
      let underLessonTitleElement = underLessonTitleElements[i];
      underLessonTitleElement.style = "white-space: nowrap;";
      replaceLessonNumberTitleHTML(underLessonTitleElement);
      insertSchedule(underLessonTitleElement, i);
      insertGdzButton(underLessonTitleElement);
    }
  }
}


start();
