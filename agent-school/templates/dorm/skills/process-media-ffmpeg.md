# 技能卡 · 视频 / 音频处理(ffmpeg)

**何时用:** 剪辑、转码、压缩、提取音频、转 GIF 等。

**前提:** 先确认装了 ffmpeg(`ffmpeg -version`);没装先问主人。

**常用片段(用前按实际文件名 / 参数调整):**
- 转码压缩:`ffmpeg -i in.mp4 -vcodec libx264 -crf 23 out.mp4`(crf 越小质量越高 / 体积越大)
- 剪一段:`ffmpeg -i in.mp4 -ss 00:00:10 -to 00:00:30 -c copy clip.mp4`
- 提取音频:`ffmpeg -i in.mp4 -vn -acodec copy out.aac`
- 转 GIF:`ffmpeg -i in.mp4 -vf "fps=12,scale=480:-1" out.gif`
- 看信息:`ffprobe in.mp4`

**关键坑:**
- `-c copy` 不重编码、最快,但剪辑点只能落在关键帧;要精确剪就去掉 `-c copy`(会重编码、慢一点)。
- 批量前先拿**一个文件**试通再批量。
- 更进阶:`get_course` 拉媒体学院(media)。

## 本机校准(用前填,见出课标准)

> 这张卡在**你这台机器**上实测过才算数。第一次用时填一次:

- OS:____(如 macOS 14.5 / Ubuntu 22.04)
- 依赖:ffmpeg ____(`ffmpeg -version` 实测版本)
- 验证:`ffmpeg -version` 能跑通;剪一段 `ffmpeg -i in.mp4 -ss 0 -to 5 -c copy out.mp4` → ____(结果)
- 校准日期:____
