guard 'shell' do
  watch(%r{^(.+)\.html.haml$}) do |m|
    puts "Detected changes in #{m[1]}.html.haml, regenerating #{m[1]}.html"
    `haml #{m[1]}.html.haml > #{m[1]}.html`
  end
  watch(%r{^(.+)\.sass$}) do |m|
    puts "Compiling sass"
    `sass #{m[1]}.sass > #{m[1]}.css`
  end
  watch(%r{^(.+)\.coffee$}) do |m|
    puts "Compiling coffee script"
    `coffee -c #{m[1]}.coffee`
  end
end
