export default interface MapperInterface<T> {
    fromJson(json: any): T;
    fromList(json: any): T[];
}