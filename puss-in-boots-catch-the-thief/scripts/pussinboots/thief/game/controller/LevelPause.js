/**
 * Created by rufian on 11/17/14.
 */
define(['orion/Notifications',
		'orion/Notifier',
		'orion/Application',
		'game/logic/Audio'],
function(Notifications,
		 Notifier,
		 Application,
		 Audio)
{
	var LevelPause = (function(value)
	{
		// Play scratch sound effect
		var app = Application.getInstance();
		var audio = app.getView(Audio.NAME);
		audio.forceStop(audio.musicInstance);
		audio.playScratch();

		if (value)
		{
			// Pause all Tweens
			TweenMax.pauseAll(true, true, true);

			// Pause rendering
			Notifier.getInstance().trigger(Notifications.PAUSE);
		}
		else
		{
			// Resume all Tweens
			TweenMax.resumeAll(true, true, true);

			// Resume rendering
			Notifier.getInstance().trigger(Notifications.RESUME);

			// Resume music
			audio.updateMusicLevel(audio.musicLevel);
		}
	});

	return LevelPause;
});