function slugify(title) {
  const lowCaseTitle = title.toLowerCase(); //переводимо рядок title в нижній регістр
  const wordsArray = lowCaseTitle.split(" "); //за допомогою метода split перетворюємо рядок на масив
  const slug = wordsArray.join("-"); //з'єднуємо елементи масиву в рядок,розділяємо елементи "-"
  return slug; //повертаємо готовий рядок
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
