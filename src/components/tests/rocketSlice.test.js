import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchRockets } from '../../redux/features/rocket/rocketSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('rocketSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch rockets successfully and update state', async () => {
    const mockrockets = [
      { id: 1, name: 'rocket 1' },
      { id: 2, name: 'rocket 2' },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockrockets));

    const store = mockStore({ rockets: { data: null, error: null } });

    // Dispatch the fetchrockets action and wait for it to complete
    await store.dispatch(fetchRockets());

    // Get the actions that were dispatched to the mock store
    const actions = store.getActions();

    // Expectations
    expect(actions[0].type).toEqual(fetchRockets.pending.type);
    expect(actions[1].type).toEqual(fetchRockets.fulfilled.type);
    expect(store.getState().rockets.error).toBeNull();
  });
});
