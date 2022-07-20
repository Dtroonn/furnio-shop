export const excludeKeyFromObj = <T, K extends keyof T>(obj: T, key: K): Omit<T, K> => {
	const copyObj = { ...obj };
	delete copyObj[key];

	return copyObj;
};
