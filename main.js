// 趣味のコンテナ
const hobbies = document.getElementById("hobbies")

// 趣味の配列
const hobbiesList = [
  {
    title: "原付",
    main: "通学用の原付(Today)でのんびり走り回るのが最近の趣味です。\n走行距離が2万キロを超えましたが元気に走ってくれます。",
    img: "./meter.png",
  },
  {
    title: "factorio",
    main: "factorioは未知の惑星に墜落したプレイヤーが惑星の資源を採掘し、工場を建設し、\nロケットを建造して脱出を目指すゲームです。巨大な工場を構築するのが楽しい😆",
    img: "./factorio_400.gif",
  },
  { title: "昼寝", main: "寝る子は育つ。", img: "./hirune_soto_boy.png" },
  {
    title: "python",
    main: "研究でも趣味でも何か作るときはとりあえずpython。(必要な時はbashも使うけどね)\nPaizaラーニングをpythonで遊んでいたらAランクまで行きました。",
    img: "./paiza.png",
  },
]

/**
 * 趣味の中身を作る
 * @param {Number} index
 */
const createHobbyDiv = function (index) {
  console.log(index)
  const newHobbyContainer = document.createElement("div")
  const title = document.createElement("h3")
  const main = document.createElement("div")
  const img = document.createElement("img")

  title.innerText = hobbiesList[index].title
  main.innerText = hobbiesList[index].main
  img.src = hobbiesList[index].img

  newHobbyContainer.classList.add("hobby-container")
  title.classList.add("hobby-title")
  main.classList.add("hobby-main")
  img.classList.add("hobby-img")

  newHobbyContainer.append(title)
  newHobbyContainer.append(main)
  newHobbyContainer.append(img)

  newHobbyContainer.id = "hobby-container"

  return newHobbyContainer
}

const removeHobby = function () {
  const currentHobby = document.getElementById("hobby-container")
  currentHobby.remove()
}

const insertHobby = function (hobbyDiv) {
  const right = document.getElementById("hobbies-right")
  right.before(hobbyDiv)
}

const hobbiesLeft = document.getElementById("hobbies-left")
const hobbiesRight = document.getElementById("hobbies-right")
let hobbiesIndex = 0

hobbiesLeft.onclick = function () {
  console.log(`Old hobbiesindex = ${hobbiesIndex}`)
  removeHobby()
  hobbiesIndex = (hobbiesIndex + hobbiesList.length - 1) % hobbiesList.length
  console.log(`New hobbiesindex = ${hobbiesIndex}`)
  const newHobby = createHobbyDiv(hobbiesIndex)
  insertHobby(newHobby)
}

hobbiesRight.onclick = function () {
  console.log(`Old hobbiesindex = ${hobbiesIndex}`)
  removeHobby()
  hobbiesIndex = (hobbiesIndex + 1) % hobbiesList.length
  console.log(`New hobbiesindex = ${hobbiesIndex}`)
  const newHobby = createHobbyDiv(hobbiesIndex)
  insertHobby(newHobby)
}

const newHobby = createHobbyDiv(0)
insertHobby(newHobby)
