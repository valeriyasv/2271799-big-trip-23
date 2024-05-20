import AbstractView from '../framework/view/abstract-view';

const SORT_TYPES = ['Day', 'Event', 'Time', 'Price', 'Offers'];

function createSortTypeTemplate(type) {
  return `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input
      id="sort-${type}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${type}">
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>`;
}

function createSortListTemplate() {
  return `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORT_TYPES.map((type) => createSortTypeTemplate(type)).join('')}
  </form>`;
}

export default class SortListView extends AbstractView {
  get template() {
    return createSortListTemplate();
  }
}
