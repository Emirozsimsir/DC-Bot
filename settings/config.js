
require("dotenv").config();

module.exports = {

  /**
   * @description requires settings for the bot
   */

  TOKEN: process.env.TOKEN || "MTE4ODIyNTM0NjI3Nzk5ODY0Mg.G_Djxl.x-5UqH9pbEiaCbGrv_F3XS32NIshFDizudvDgw",  // your bot token
  PREFIX: process.env.PREFIX || "!", //<= default is #  // bot prefix
  OWNER_ID: process.env.OWNER_ID || "275621872995926017", //your client id

  /**
   *
   */
  EMPTY_LEAVE: process.env.EMPTY_LEAVE || 60, //<= default is 60  // time in seconds

  /**
   * @description boolean settings for the bot
   */
  LEAVE_EMPTY: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when empty
  LEAVE_FINISH: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when finished
  LEAVE_STOP: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when stopped
}