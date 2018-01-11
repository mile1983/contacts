import { FilterByNamesPipe } from './filter-by-names.pipe';

describe('FilterByNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
