//01-未执行(开始评估);02-执行中(评估中);03-已执行(已完成)
enum TaskRecordStatusEnum {
	NOT_STARTED = '01',
	IN_PROGRESS = '02',
	COMPLETED = '03',
}

export default TaskRecordStatusEnum;