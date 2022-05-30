class Api::GreetingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'something',
        :guid => '04564'
      }
    ]}.to_json
  end
end