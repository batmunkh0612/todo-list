const body = document.getElementsByTagName("body")[0];

const svgs = {
  editSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_4089_57)">
  <path d="M11.3333 2.00001C11.5031 1.79936 11.7131 1.63605 11.95 1.52046C12.1869 1.40488 12.4454 1.33956 12.7091 1.32868C12.9728 1.3178 13.2359 1.36159 13.4816 1.45727C13.7273 1.55294 13.9503 1.69839 14.1362 1.88435C14.3222 2.07032 14.4671 2.29272 14.5617 2.53737C14.6563 2.78202 14.6986 3.04356 14.6857 3.30533C14.6729 3.56709 14.6053 3.82333 14.4873 4.05772C14.3692 4.29211 14.2033 4.4995 14 4.66667L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00001Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 3.33333L12.6667 5.99999" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_4089_57">
    <rect width="16" height="16" fill="white"/>
  </clipPath>
</defs>
</svg>`,

  removeSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M2 4H14" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66668C4.00001 14.6667 3.33334 14 3.33334 13.3333V4" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33334 3.99999V2.66666C5.33334 1.99999 6.00001 1.33333 6.66668 1.33333H9.33334C10 1.33333 10.6667 1.99999 10.6667 2.66666V3.99999" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66666 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33334 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
};

const createElement = (tag, classList, innerTextOrHtml = "",) => {
  const element = document.createElement(tag);

  classList.forEach((className) => {
    element.classList.add(className);
  });

  element.innerHTML = innerTextOrHtml;

  return element;
};

const createBoard = (title, countValue, color) => {
  // create element
  const board = createElement("div", ["board"]);
  const header = createElement("div", ["header"]);
  const list = createElement("div", ["list"]);
  const headerTitle = createElement("div", ["header-title"]);
  const circle = createElement("div", ["circle", color]);
  const headerText = createElement("p", [], title);
  const count = createElement("div", [], countValue);

  headerTitle.appendChild(circle);
  headerTitle.appendChild(headerText);
  header.appendChild(headerTitle);
  header.appendChild(count);
  board.appendChild(header);
  board.appendChild(list);
  body.appendChild(board);
};

const createTask = (desc, index) => {
  console.log(desc, index);
  const list = document.getElementsByClassName("list")[index];
  const task = createElement('div',['task']);
  const circle = createElement('div', ['circle', 'black']);
  const text = createElement('p',['text'],desc);
  const edit = createElement('div',[],svgs.editSvg);
  const remove = createElement('div',[],svgs.removeSvg);

  task.appendChild(circle);
  task.appendChild(text);
  task.appendChild(edit);
  task.appendChild(remove);
  list.appendChild(task);
};

const boards = [
  {
    title: "Todo",
    bgColor: "white",
  },

  {
    title: "In progress",
    bgColor: "blue",
  },

  {
    title: "Blocked",
    bgColor: "red",
  },
  {
    title: "Done",
    bgColor: "yellow",
  },
];

boards.forEach((board) => createBoard(board.title, 5, board.bgColor));

const data = {
  todo: [
    {
      description: "todo title",
    },
    {
      description: "todo title",
    },
    {
      description: "todo title",
    },
  ],

  inProgress: [
    {
      description: "in progress",
    },
    {
      description: "todo title",
    },
    {
      description: "todo title",
    },
  ],

  blocked: [
    {
      description: "blocked",
    },
  ],

  done: [
    {
      description: "done",
    },
  ],
};

Object.keys(data).forEach((key,index) => data[key].forEach((task) => createTask(task.description, index)))
