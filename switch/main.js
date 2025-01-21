const containers = document.querySelectorAll('.js-buttons-container');

const setDateAttribute = ({settingTarget}, params) => {
  const element = document.querySelector(settingTarget);
}

const applySetting = (setting, params) => {
  if (setting.settingType === 'class') {

  } else if (setting.settingType === 'attribute') {
    setDateAttribute(setting, params)
  }
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
