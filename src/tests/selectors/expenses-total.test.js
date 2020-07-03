import selectExpensesTotal from '../../selectors/expenses-totaltal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () =>{
    const res= selsectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense',() => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up multiple expense',() => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});