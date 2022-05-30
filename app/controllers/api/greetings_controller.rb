class Api::GreetingsController < ApplicationController
  def index
    render json: { :greetings => [
      {
        :name => 'something',
        :guid => '0435' 
      }
    ]}.to_json
  end
end