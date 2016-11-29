import AlphaNode from './alpha-node';
import { IObjectPattern } from '../pattern';
import Context from '../context';

export default class AliasNode extends AlphaNode {
	protected alias: string;
	constructor(constraint: IObjectPattern) {
		super(constraint as any);
		this.alias = constraint.alias;
	}

	toString() {
		return "AliasNode" + this.__count;
	}

	assert(context: Context) {
		return this.propagateAssert(context.set(this.alias, context.fact.object));
	}

	modify(context: Context) {
		return this.propagateModify(context.set(this.alias, context.fact.object));
	}

	retract(context: Context) {
		return this.propagateRetract(context.set(this.alias, context.fact.object));
	}

	equal(other: AliasNode) {
		return other instanceof AliasNode && this.alias === other.alias;
	}
}