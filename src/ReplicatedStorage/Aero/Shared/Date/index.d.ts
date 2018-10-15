interface Date {
	Hour: number
	Minute: number
	Weekday: string
	Day: number
	Month: number
	Year: number
	Second: number
	Millisecond: number
	Yearday: unknown
	IsDST: boolean

	new(seconds?: number, useUtc?: boolean)

	ToJSON(): string
	ToSeconds(): number
	GetTimezoneHourOffset(): number
	Format(strFormat: string): string
	ToUTC(): unknown
	ToLocal(): unknown
	ToISOString(): string
	ToDateString(): string
	ToTimeString(): string
	toString(): string
}
declare const dateClass: Date
export default Date