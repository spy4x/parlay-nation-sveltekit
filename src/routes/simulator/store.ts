import { writable } from 'svelte/store';

interface State {
	stage: 'betting' | 'result';
	hasWon: boolean;
	balance: number;
	dice1: number;
	dice2: number;
	bet: number;
}

const initialValue: State = {
	stage: 'betting',
	hasWon: false,
	balance: 100,
	dice1: 0,
	dice2: 0,
	bet: 0
};

const store = writable<State>(initialValue);

export const gameStore = {
	subscribe: store.subscribe,
	reset: () => store.set(initialValue),
	bet: (amount: number) => {
		// increases the bet by the amount
		store.update((state) => {
			state.bet += amount;
			return state;
		});
	},
	roll: () => {
		// rolls the dices
		// if both dices > 3 - the player wins and balance is increased by the bet
		// otherwise the bet is lost
		// in both cases bet is reset to 0
		store.update((state) => {
			state.stage = 'result';
			state.dice1 = Math.floor(Math.random() * 6) + 1;
			state.dice2 = Math.floor(Math.random() * 6) + 1;
			if (state.dice1 > 3 && state.dice2 > 3) {
				state.balance += state.bet;
				state.hasWon = true;
			} else {
				state.balance -= state.bet;
				state.hasWon = false;
			}
			state.bet = 0;
			return state;
		});
	},
	next: () => {
		// resets the stage to 'betting'
		store.update((state) => {
			state.stage = 'betting';
			return state;
		});
	}
};
