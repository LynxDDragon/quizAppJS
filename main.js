fetch('./quiz.json')
    .then((res) => res.json())
    .then((data) => quizParse(data))

function quizParse(data) {
    console.log(data)
    for (a of data.quiz) {
    let question = a.question
    let option1 = a.options.option1
    let option2 = a.options.option2
    let option3 = a.options.option3

    let clone = choice.content.cloneNode(true);
    let label = clone.querySelectorAll('label')
    let h4 =  clone.querySelectorAll('h4')

    h4[0].textContent = question
    label[0].textContent = option1
    label[1].textContent = option2
    label[2].textContent = option3

    quizCard.appendChild(clone)
    }

    // FOR SHORT-ANSWER QUESTIONS

    for (i of data.shortAnswer) {
        let prompt = i.prompt
        console.log(i.prompt)
        let answer = i.answer
        console.log(i.answer)

        let clone = textQuiz.content.cloneNode(true);
        let h4 = clone.querySelectorAll('h4')
        let label = clone.querySelectorAll('label')

        h4[0].textContent = prompt

        textAnswer.appendChild(clone)
    }

}
