const containers = document.querySelectorAll('.js-buttons-container');
const settingButtons = document.querySelectorAll('[data-setting-name]');

const setDateAttribute = ({settingTarget}, params) => {
  const element = document.querySelector(settingTarget);
  for (const [key, value] of Object.entries(params)) {
    element.dataset[key] = value;
  }
}

const setClass = ({settingTarget}, params) => {
  const element = document.querySelector(settingTarget);
  for (const [key, value] of Object.entries(params)) {

    const elements = Array.from(settingButtons)
    .filter(element => element.dataset['settingName'] === key);
    elements.forEach(item => element.classList.remove(item.dataset.settingValue));

    element.classList.add(value);
  }
}

const setButtonActive = (params) => {
  for (const [key, value] of Object.entries(params)) {
    const activeButton = Array.from(settingButtons)
    .find(element => element.dataset['settingName'] === key && element.classList.contains('active'));

    activeButton.classList.remove('active')

    const setButton = Array.from(settingButtons)
    .find(element => element.dataset['settingName'] === key && element.dataset['settingValue'] === value)

    setButton.classList.add('active')
  }
}

const applySetting = (setting, params) => {
  if (setting.settingType === 'class') {
    setClass(setting, params)
  } else if (setting.settingType === 'attribute') {
    setDateAttribute(setting, params)
  }

  setButtonActive(params)
}


const settingButtonClickHandler = (evt, setting) => {
  const button = evt.target.closest('button');
  if (!button) {
    return;
  }

  const params = {}

  const settingName = button.dataset.settingName;
  const settingValue = button.dataset.settingValue;
  params[settingName] = settingValue;

  applySetting(setting, params)
}

containers.forEach(container => {
  const setting = container.dataset;
  container.addEventListener('click', evt => {
    settingButtonClickHandler(evt, setting)
  })
});










// const buttonThemeLight = document.querySelector('.theme-button-light');
// const buttonThemeDark = document.querySelector('.theme-button-dark');

// const buttonCardViewTile = document.querySelector('.card-view-button-tile');
// const buttonCardViewStandard = document.querySelector('.card-view-button-standard');
// const buttonCardViewCompact = document.querySelector('.card-view-button-compact');

// const cards = document.querySelector('.cards');

// buttonThemeLight.addEventListener('click', () => {
//   document.documentElement.dataset['themeName'] = 'light'
// });

// buttonThemeDark.addEventListener('click', () => {
//   document.documentElement.dataset['themeName'] = 'dark'
// });

// buttonCardViewTile.addEventListener('click', () => {
//   cards.classList.remove('standard')
//   cards.classList.remove('compact')
//   cards.classList.add('tile')
// });

// buttonCardViewStandard.addEventListener('click', () => {
//   cards.classList.remove('compact')
//   cards.classList.remove('tile')
//   cards.classList.add('standard')
// });

// buttonCardViewCompact.addEventListener('click', () => {
//   cards.classList.remove('tile')
//   cards.classList.remove('standard')
//   cards.classList.add('compact')
// });
